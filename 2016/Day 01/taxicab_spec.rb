require_relative "taxicab"

RSpec.describe Taxicab do
  describe "blocks_away" do
    [
      ["R2, L3", 5],
      ["R2, R2, R2", 2],
      ["R5, L5, R5, R3", 12]
    ].each do |input, expected|
      it "input #{input} generates result #{expected}" do
        blocks = Taxicab.blocks_away(input)
        expect(blocks).to eq(expected)
      end
    end
  end

  describe "first_repeated_location" do
    [["R8, R4, R4, R8", 4]].each do |input, expected|
      it "input #{input} generates result #{expected}" do
        blocks = Taxicab.first_repeated_location(input)
        expect(blocks).to eq(expected)
      end
    end
  end
end
