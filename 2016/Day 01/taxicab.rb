class Taxicab
  GRID_SIZE = 1000
  ROW_OFFSET = 500
  COL_OFFSET = 500

  @directions = {
    N: {
      R: :E,
      L: :W
    },
    E: {
      R: :S,
      L: :N
    },
    S: {
      R: :W,
      L: :E
    },
    W: {
      R: :N,
      L: :S
    }
  }

  @movement = { N: [1, 0], E: [0, 1], S: [-1, 0], W: [0, -1] }

  class << self
    def next_position(position, direction, steps)
      new_position = position.map(&:clone)
      new_position[0] += @movement[direction][0] * steps
      new_position[1] += @movement[direction][1] * steps
      return new_position
    end

    def indication_generator(input)
      Enumerator.new do |enum|
        for indication in input.split(", ")
          turn = indication[0].to_sym
          steps = indication[1..-1].to_i
          enum.yield turn, steps
        end
      end
    end

    def path_generator(direction, prev_position, next_position)
      case direction
      when :N
        range = (prev_position[0] + 1)..next_position[0]
        is_y_axis = true
      when :S
        range = (prev_position[0] - 1).downto(next_position[0])
        is_y_axis = true
      when :E
        range = (prev_position[1] + 1)..next_position[1]
        is_y_axis = false
      when :W
        range = (prev_position[1] - 1).downto(next_position[1])
        is_y_axis = false
      end

      Enumerator.new do |enum|
        for i in range
          row = is_y_axis ? i : prev_position[0]
          col = is_y_axis ? prev_position[1] : i
          enum.yield row, col
        end
      end
    end

    def blocks_away(input)
      position = [0, 0]
      direction = :N

      for turn, steps in indication_generator(input)
        direction = @directions[direction][turn]
        position = next_position(position, direction, steps)
      end

      return position[0].abs + position[1].abs
    end

    def first_repeated_location(input)
      grid = Array.new(GRID_SIZE) { Array.new(GRID_SIZE) { false } }
      prev_position = [ROW_OFFSET, COL_OFFSET] # [0,0] with offset
      grid[ROW_OFFSET][COL_OFFSET] = true
      direction = :N

      for turn, steps in indication_generator(input)
        direction = @directions[direction][turn]
        position = next_position(prev_position, direction, steps)

        for row, col in path_generator(direction, prev_position, position)
          if grid[row][col]
            return (row - ROW_OFFSET).abs + (col - COL_OFFSET).abs
          end
          grid[row][col] = true
        end
        prev_position = position
      end

      return nil
    end
  end
end
