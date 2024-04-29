class Bathroom
  @movement = { U: [-1, 0], R: [0, 1], D: [1, 0], L: [0, -1] }
  @normal_keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  @cutting_edge_keypad = [
    [nil, nil, 1, nil, nil],
    [nil, 2, 3, 4, nil],
    [5, 6, 7, 8, 9],
    [nil, "A", "B", "C", nil],
    [nil, nil, "D", nil, nil]
  ]

  class << self
    def next_position(position, move, keypad_size)
      new_position = position.map(&:clone)
      diff = @movement[move.to_sym]
      row = new_position[0] + diff[0]
      col = new_position[1] + diff[1]
      new_position[0] = [[row, 0].max, keypad_size].min
      new_position[1] = [[col, 0].max, keypad_size].min
      return new_position
    end

    def get_password_from_normal_keypad(input)
      password = ""
      position = [1, 1]
      for instruction in input
        for move in instruction.split("")
          position = next_position(position, move, 2)
        end
        password += "#{@normal_keypad[position[0]][position[1]]}"
      end
      return password
    end

    def get_password_from_cutting_edge_keypad(input)
      password = ""
      position = [2, 0]
      for instruction in input
        for move in instruction.split("")
          candidate = next_position(position, move, 4)
          if !@cutting_edge_keypad[candidate[0]][candidate[1]].nil?
            position = candidate
          end
        end
        password += "#{@cutting_edge_keypad[position[0]][position[1]]}"
      end
      return password
    end
  end
end
