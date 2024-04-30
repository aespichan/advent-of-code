class Triangle
  class << self
    def is_possible?(input)
      sides = input.map(&:to_i).sort
      return (sides[0] + sides[1]) > sides[2]
    end
  end
end
