require_relative "triangle"

RSpec.describe Triangle do
  describe "is_possible?" do
    [[%w[5 10 25], false], [%w[3 4 5], true]].each do |input, expected|
      it "input #{input} generates result #{expected}" do
        output = Triangle.is_possible?(input)
        expect(output).to eq(expected)
      end
    end
  end
end
