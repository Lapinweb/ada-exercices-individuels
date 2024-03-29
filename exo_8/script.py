import argparse

"""
#Add args
parse = argparse.ArgumentParser()
parse.add_argument(
   "--codemaker",
   nargs="*",
   type=str,
   default=["red", "blue"]
)
parse.add_argument(
   "--codebreaker",
   nargs="*",
   type=str,
   default=[]
)

#Get args
args = parse.parse_args()
codemaker_input = args.codemaker
codebreaker_input = args.codebreaker
print("codemaker: ", codemaker_input)
print("codebreaker: ", codebreaker_input)
 """

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
      new_input = input("Chose a new color: ")
      while not is_valid_color(new_input, pawn_colors):
         new_input = input("Invalid input, retry: ")
      full_input.append(new_input)
      print("code : ", full_input)
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
   

def game(number_of_pawns):
   print("Codemaker's turn :")
   codemaker_input = get_combination_input(number_of_pawns)
   print("Codebreaker's turn")
   codebreaker_input = get_combination_input(number_of_pawns)
   
   print("codemaker : ", codemaker_input)
   print("codebreaker : ", codebreaker_input)

   pawn_check = check_colors(codemaker_input, codebreaker_input)
   
   while not pawn_check[0] == number_of_pawns:
      print(pawn_check)
      print("Wrong ! Retry : ")
      codebreaker_input = get_combination_input(number_of_pawns)
      pawn_check = check_colors(codemaker_input, codebreaker_input)
      
   print("codemaker : ", codemaker_input)
   print("codebreaker : ", codebreaker_input)
   print("Congratulations, you won !")

 ######################################################################
pawn_colors = ["red", "blue", "yellow", "green","purple", "orange", "pink", "black"]

game(4)