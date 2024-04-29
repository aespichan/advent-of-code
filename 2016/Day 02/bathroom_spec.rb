require_relative "bathroom"

RSpec.describe Bathroom do
  describe "get_password_from_normal_keypad" do
    [[%w[ULL RRDDD LURDL UUUUD], "1985"]].each do |input, expected|
      it "input #{input} generates result #{expected}" do
        password = Bathroom.get_password_from_normal_keypad(input)
        expect(password).to eq(expected)
      end
    end
  end

  describe "get_password_from_cutting_edge_keypad" do
    [[%w[ULL RRDDD LURDL UUUUD], "5DB3"]].each do |input, expected|
      it "input #{input} generates result #{expected}" do
        password = Bathroom.get_password_from_cutting_edge_keypad(input)
        expect(password).to eq(expected)
      end
    end
  end
end
