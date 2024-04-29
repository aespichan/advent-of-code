require_relative "taxicab"

def part1(input)
  blocks = Taxicab.blocks_away(input)
  puts "1. #{blocks}"
end

def part2(input)
  blocks = Taxicab.first_repeated_location(input)
  puts "2. #{blocks}"
end

def advent_code(filename)
  file = File.open(filename)
  input = file.read
  part1(input)
  part2(input)
end

if (ARGV.length < 1)
  puts("Usage: ruby index.rb <filename>")
else
  filename = ARGV[0]
  advent_code(filename)
end
