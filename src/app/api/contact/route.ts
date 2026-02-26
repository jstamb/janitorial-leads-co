import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    console.log("Contact form submission:", data);
    
    // Here you would typically:
    // 1. Save to a database (Convex, Supabase, etc.)
    // 2. Send to a CRM (GHL, HubSpot, etc.)
    // 3. Send email notification
    // 4. Post to webhook (Zapier, Make, etc.)
    
    // For now, we'll just log and return success
    // TODO: Add your integration logic here
    
    // Example: Send to webhook
    // await fetch(process.env.WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     ...data,
    //     source: "janitorial-leads-website",
    //     timestamp: new Date().toISOString(),
    //   }),
    // });

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
