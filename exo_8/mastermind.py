import random

#Functions for gameplay
def is_valid_color(color_to_check, available_colors_list):
   for color in available_colors_list:
      if color == color_to_check:
         return True
   return False

def is_valid_combination(combination):
   for color in combination:
      if not is_valid_color(color):
         return False
   return True

def get_combination_input(n):
   full_input = []
   while len(full_input) < n:
      new_input = input(f"Choose a color from {pawn_colors} : ")
      while not is_valid_color(new_input, pawn_colors):
         new_input = input("Invalid input, retry: ")
      full_input.append(new_input)
      print("Selected pawns : ", full_input)
   return full_input

def check_colors(maker_code, breaker_code):
   check_result = [0, 0] #result [n of pawns correct color & position, n of pawns right color & wrong position]
   remaining_maker_pawns = [] #remaining colors without pawns at correct position for maker
   remaining_breaker_pawns = [] #remaining colors without pawns at correct position for breaker
   
   # check pawns correct color & position
   for i, maker_pawn in enumerate(maker_code):
      if maker_code[i] == breaker_code[i]:
         check_result[0] += 1
      else:
         remaining_maker_pawns.append(maker_code[i])
         remaining_breaker_pawns.append(breaker_code[i])

   # check pawns right color & wrong position from remaining pawns
   for maker_pawn in remaining_maker_pawns:
      for breaker_pawn in remaining_breaker_pawns:
         if maker_pawn == breaker_pawn:
            check_result[1] += 1
            remaining_breaker_pawns.remove(breaker_pawn)
            break

   
   return check_result
   
def generate_pawns_suit(n):
   result = []
   for i in range(n):
      random_index = random.randint(0, len(pawn_colors) - 1)
      result.append(pawn_colors[random_index])
   return result

def game(number_of_pawns):
   #Manual input of code to guess
   # print("Codemaker's turn :")
   # codemaker_input = get_combination_input(number_of_pawns)
   
   #Computer generated input of code to guess
   codemaker_input = generate_pawns_suit(number_of_pawns)
    
   #User input
   print("Codebreaker's turn")
   codebreaker_input = get_combination_input(number_of_pawns)
   

   pawn_check = check_colors(codemaker_input, codebreaker_input)
   
   while not pawn_check[0] == number_of_pawns:
      # print("codemaker : ", codemaker_input)
      # print("codebreaker : ", codebreaker_input)
      print(pawn_check)
      print("\nWrong ! Retry : ")
      codebreaker_input = get_combination_input(number_of_pawns)
      pawn_check = check_colors(codemaker_input, codebreaker_input)
      
   print("codemaker : ", codemaker_input)
   print("codebreaker : ", codebreaker_input)
   print("Congratulations, you won !")

######################################################################
pawn_colors = ["red", "blue", "yellow", "green","purple", "orange", "pink", "black"]

game(4)