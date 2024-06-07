import random

def generate_state_grid(width, height, k):
    k_count = 0
    grid = []
    
    for x in range(height):
        grid.append([])
        for y in range(width):
            grid[x].append(False)
    
    while k_count < k:
        random_col = random.randrange(0, width)
        random_row = random.randrange(0, height)
        if grid[random_row][random_col] != True:
            grid[random_row][random_col] = True
            k_count += 1
        
    return grid

def generate_covered_grid(grid):
    displayed_grid = []
    
    for x in range(len(grid)):
        displayed_grid.append([])
        for y in range(len(grid[x])):
            if grid[x][y] == True:
                displayed_grid[x].append("🔳")
            else:
                displayed_grid[x].append("🔲")
    
    return displayed_grid

def generate_uncovered_grid(grid):
    displayed_grid = []
    
    for x in range(len(grid)):
        displayed_grid.append([])
        for y in range(len(grid[x])):
            if grid[x][y] == True:
                displayed_grid[x].append("💣")
            else:
                displayed_grid[x].append("🔳")
    
    return displayed_grid
   
def display_grid(grid):
    for row in grid:
        print(' '.join(row))   
   
def is_valid_coordinate(input, max_input):
    if input.isnumeric() == False:
        return False

    if 0 <= int(input) < max_input:
        return True

    return False    

def get_coordinates(width, height):
    x = input(f"Chose x coordinate (between 0 and {width-1}) : ")
    while not is_valid_coordinate(x, width):
        x = input("Invalid input, chose x coordinate: ")
        
    y = input(f"Chose y coordinate (between 0 and {height-1}) : ")
    while not is_valid_coordinate(y, height):
        y= input("Invalid input, chose y coordinate: ")
        
    return {"x": int(x),"y": int(y)}

def did_player_win(res_grid, interface_grid):
    for x in range(len(res_grid)):
        for y in range(len(res_grid[x])):
            if res_grid[x][y] == interface_grid[x][y]:
                return False
            
    return True

def game():
    w = 3
    h = 3
    k = 3
    res_grid = generate_state_grid(w, h, k)
    interface_grid = generate_state_grid(w, h, 0)
    
    """ col_numbers = [f'{i:>1}' for i in range(w)]
    print(' ', ' '.join(col_numbers))
    row_line = f"{" ".join("_"*(w + 1))}"
    print(row_line) """
    
    victory = did_player_win(res_grid, interface_grid)
    while victory == False:
        # display_grid(generate_uncovered_grid(res_grid))
        print("\n")
        display_grid(generate_covered_grid(interface_grid))
        
        coordinates = get_coordinates(w, h)
        x = coordinates['x']
        y = coordinates['y']
        
        if res_grid[y][x] == True:
            lose_grid = generate_uncovered_grid(res_grid)
            lose_grid[y][x] = "💥"
            print("\n\n💣 You lose 💀")
            display_grid(lose_grid)
            break
        else:
            interface_grid[y][x] = True
            print("\nYou chose x :", x, ", y :", y)
            
        victory = did_player_win(res_grid, interface_grid)
        

    if victory:
        print("\n\nYou win !")
        display_grid(generate_uncovered_grid(res_grid))

game()