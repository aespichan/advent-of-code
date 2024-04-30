require_relative "triangle"

def clean_input(input)
  cleaned_input = []
  for line in input
    cleaned_input.append(line.split)
  end
  return cleaned_input
end

def part1(input)
  count = 0
  input.each { |line| count += 1 if Triangle.is_possible?(line) }
  puts "1. #{count}"
end

def part2(input)
  count = 0
  num_triangles_rows = input.length / 3

  for row in 0..(num_triangles_rows - 1)
    for col in 0..2
      sides = [
        input[row * 3][col],
        input[row * 3 + 1][col],
        input[row * 3 + 2][col]
      ]
      count += 1 if Triangle.is_possible?(sides)
    end
  end

  puts "2. #{count}"
end

def advent_code(filename)
  file = File.open(filename)
  input = file.read.split("\n")
  input = clean_input(input)
  part1(input)
  part2(input)
end

if (ARGV.length < 1)
  puts("Usage: ruby index.rb <filename>")
else
  filename = ARGV[0]
  advent_code(filename)
end
