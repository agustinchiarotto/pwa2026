import { describe, expect, it, vi, afterEach } from "vitest";
import { getPokemonByName } from "./pokemon";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("getPokemonByName", () => {
  it("returns pokemon payload when request succeeds", async () => {
    const payload = { name: "charmander", id: 4 };
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => payload,
    });

    const result = await getPokemonByName("charmander");

    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon/charmander",
    );
    expect(result).toEqual(payload);
  });

  it("throws error when request fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 404,
    });

    await expect(getPokemonByName("missingno")).rejects.toThrow(
      "Pokemon request failed: 404",
    );
  });
});
