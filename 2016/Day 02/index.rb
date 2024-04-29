require_relative "bathroom"

def part1(input)
  password = Bathroom.get_password_from_normal_keypad(input)
  puts "1. #{password}"
end

def part2(input)
  password = Bathroom.get_password_from_cutting_edge_keypad(input)
  puts "2. #{password}"
end

def advent_code(filename)
  file = File.open(filename)
  input = file.read.split("\n")
  part1(input)
  part2(input)
end

if (ARGV.length < 1)
  puts("Usage: ruby index.rb <filename>")
else
  filename = ARGV[0]
  advent_code(filename)
end
