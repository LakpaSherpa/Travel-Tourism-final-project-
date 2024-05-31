const { IM_A_TEAPOT } = require("http-status");
const supertest = require("supertest");

describe("GET v1/patient/", () => {
  it("should return all patient", async () => {
    const res = await request(app).get("v1/patient/");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe("POST v1/patient/", () => {
  it("should return all patient", async () => {
    const res = await request(app).post("v1/patient/").send({
      fullName: "Pasang lakpa Sherpa",
      email: "pasanglakpasherpa101@gmail.com",
      contactNo: "9860409629",
      dob: "1997-09-27",
      address: "Kathmandu",
      images: "",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
