import { NextResponse } from 'next/server';

const API_KEY = '99885A6A-7974-4973-80BB-C7B7136E3A11';
const API_ENDPOINT = 'https://uk1.ukvehicledata.co.uk/api/datapackage/VehicleData?v=2&api_nullitems=1';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reg = searchParams.get('reg')?.replace(/\s+/g, '').toUpperCase();

  if (!reg) {
    return NextResponse.json(
      { error: "Registration number is required" },
      { status: 400 }
    );
  }

  try {
    const apiUrl = `${API_ENDPOINT}&auth_apikey=${API_KEY}&key_VRM=${reg}`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const json = await response.json();
    
    if (json.Response?.StatusCode !== "Success") {
      return NextResponse.json({
        success: false,
        error: json.Response?.StatusMessage || "Vehicle registration not found."
      }, { status: 404 });
    }

    const dataItems = json.Response.DataItems;
    const vehicle = dataItems?.VehicleRegistration;
    const technical = dataItems?.TechnicalSpecification;

    // Map the API structure to our frontend expectation
    // Note: ukvehicledata structure can vary by package, but standard VehicleData contains these
    const vehicleInfo = {
      make: vehicle?.Make || "UNKNOWN",
      model: vehicle?.Model || "UNKNOWN",
      year: vehicle?.YearOfManufacture || "UNKNOWN",
      variant: vehicle?.Vrm || "",
      engineSize: technical?.Dimensions?.EngineCapacity ? `${technical.Dimensions.EngineCapacity}cc` : null,
      frontTyres: null as any,
      rearTyres: null as any
    };

    // Extract Tyre Sizes if available in TechnicalSpecification
    const tyreDetails = technical?.Tyre;
    if (tyreDetails) {
      if (tyreDetails.Front?.SizeDescription) {
        vehicleInfo.frontTyres = {
          size: tyreDetails.Front.SizeDescription,
          speed: tyreDetails.Front.SpeedIndex || "",
          slug: tyreDetails.Front.SizeDescription.replace(/\s+/g, ''),
          label: "FRONT_AXLE // PRIMARY"
        };
      }
      if (tyreDetails.Rear?.SizeDescription) {
        vehicleInfo.rearTyres = {
          size: tyreDetails.Rear.SizeDescription,
          speed: tyreDetails.Rear.SpeedIndex || "",
          slug: tyreDetails.Rear.SizeDescription.replace(/\s+/g, ''),
          label: "REAR_AXLE // STAGGERED"
        };
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        registration: reg,
        ...vehicleInfo
      }
    });

  } catch (error) {
    console.error("Vehicle API Error:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to connect to vehicle data service. Please try manual entry."
    }, { status: 500 });
  }
}

