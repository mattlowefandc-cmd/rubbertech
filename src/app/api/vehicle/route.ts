import { NextResponse } from 'next/server';

// Mock database to simulate a DVLA/VRM API response.
// These simulate what a real data provider would return.
const MOCK_DATABASE: Record<string, any> = {
  // Test Registration 1
  "HN68YTZ": {
    make: "MERCEDES-BENZ",
    model: "E-CLASS (W213)",
    year: "2018",
    variant: "E220D AMG LINE",
    color: "GREY",
    frontTyres: {
      size: "245/40 R19",
      speed: "98Y",
      slug: "245/40R19",
      label: "FRONT_AXLE // PRIMARY"
    },
    rearTyres: {
      size: "275/35 R19",
      speed: "100Y",
      slug: "275/35R19",
      label: "REAR_AXLE // STAGGERED"
    }
  },
  // Test Registration 2
  "AB22CDE": {
    make: "VOLKSWAGEN",
    model: "GOLF",
    year: "2022",
    variant: "R",
    color: "BLUE",
    frontTyres: {
      size: "235/35 R19",
      speed: "91Y",
      slug: "235/35R19",
      label: "ALL_AXLES // SQUARE SETUP"
    }
    // no rearTyres -> means square setup
  },
  // Test Registration 3 (Track Car Context)
  "M3GTR": {
    make: "BMW",
    model: "M3",
    year: "2004",
    variant: "E46 COUPE",
    color: "SILVER",
    frontTyres: {
      size: "225/45 R18",
      speed: "91Y",
      slug: "225/45R18",
      label: "FRONT_AXLE // PRIMARY"
    },
    rearTyres: {
      size: "255/40 R18",
      speed: "95Y",
      slug: "255/40R18",
      label: "REAR_AXLE // STAGGERED"
    }
  }
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reg = searchParams.get('reg')?.replace(/\s+/g, '').toUpperCase();

  if (!reg) {
    return NextResponse.json(
      { error: "Registration number is required" },
      { status: 400 }
    );
  }

  // TODO: Replace this block with your actual VRM API call.
  // Example: 
  // const response = await fetch(`https://api.ukvehicledata.co.uk/v2/...&vrm=${reg}`);
  // const data = await response.json();

  // MOCK LOGIC: Introduce artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const vehicleInfo = MOCK_DATABASE[reg];

  if (vehicleInfo) {
    return NextResponse.json({
      success: true,
      data: {
        registration: reg,
        ...vehicleInfo
      }
    });
  } else {
    // If not found in mock DB, return a generic or simulated not found
    return NextResponse.json({
      success: false,
      error: "Vehicle registration not found. Please try 'HN68YTZ', 'AB22CDE' or 'M3GTR'."
    }, { status: 404 });
  }
}
