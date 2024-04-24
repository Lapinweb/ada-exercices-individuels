from tkinter import *
from tkinter import ttk
import random


class Mastermind:
   def __init__(self, root) :
      root.title("Mastermind")
      root.geometry("370x300")
      style = ttk.Style(root)
      
      self.turn = 0
      self.colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple", "pink"]
      self.colors_buttons = []
      self.pawns = []
      self.right_suit = self.generate_suit()
      self.player_suit = []
      
      # frame of the whole content
      content = ttk.Frame(root, padding="15")
      content.grid(column=0, row=0, sticky=(N,W,S,E))
      
      # selection of buttons to choose a color
      colors_frame = ttk.LabelFrame(content, text="Choose a color", padding="10")
      colors_frame.grid(column=0, row=0)
      
      column_number = 0
      row_number = 0
      for i, color in enumerate(self.colors):
         style.configure("Color_%s.TButton" %color, foreground=color)
         color_button = ttk.Button(colors_frame, text=color.upper(), width=10, padding=5, style="Color_%s.TButton" %color,
         command=lambda selected_color = color: self.game(selected_color))
         self.colors_buttons.append(color_button)
         self.colors_buttons[i].grid(column=column_number,row=row_number)
         column_number += 1
         if column_number > 3:
            column_number = 0
            row_number += 1
      
      """ color buttons
      color1 = ttk.Button(colors_frame, text=colors[0]).grid(column=1,row=1)
      color2 = ttk.Button(colors_frame, text=colors[1]).grid(column=2,row=1)
      color3 = ttk.Button(colors_frame, text=colors[2]).grid(column=3,row=1)
      color4 = ttk.Button(colors_frame, text=colors[3]).grid(column=4,row=1)
      color5 = ttk.Button(colors_frame, text=colors[4]).grid(column=1,row=2)
      color6 = ttk.Button(colors_frame, text=colors[5]).grid(column=2,row=2)
      color7 = ttk.Button(colors_frame, text=colors[6]).grid(column=3,row=2)
      color8 = ttk.Button(colors_frame, text=colors[7]).grid(column=4,row=2) """
      
      # display the selected colors
      pawns_frame = ttk.LabelFrame(content, text="Selection", padding=10)
      pawns_frame.grid(column=0, row=1, sticky=(W,E))
      pawns_frame.columnconfigure(0,weight=1)
      pawns_frame.columnconfigure(1,weight=1)
      pawns_frame.columnconfigure(2,weight=1)
      pawns_frame.columnconfigure(3,weight=1)
      for index in range(4):
         pawn = ttk.Label(pawns_frame, anchor="center", width=10, padding=5, borderwidth=2, relief="ridge", style="Pawn_%s.TLabel" %index, background="white")
         self.pawns.append(pawn)
         self.pawns[index].grid(column=index,row=0)
      
      """ pawn labels
      pawn1 = ttk.Label(pawns_frame, text=1,anchor="center", width=10, padding="5").grid(column=0,row=3)
      pawn2 = ttk.Label(pawns_frame, text=2,anchor="center", width=10, padding="5").grid(column=1,row=3)
      pawn3 = ttk.Label(pawns_frame, text=3,anchor="center", width=10, padding="5").grid(column=2,row=3)
      pawn4 = ttk.Label(pawns_frame, text=4,anchor="center", width=10, padding="5").grid(column=3,row=3) """
      
      # retry button
      retry_button = ttk.Button(pawns_frame, text="Retry", command= self.reset_selection).grid(column=0, row=1, columnspan=4, pady=(15, 5))
         
      # Display message
      result = ttk.Frame(content, padding=10, height=150)
      result.grid(column=0, row=2)
      style.configure("Message.TLabel")
      self.message_box = ttk.Label(result, text="Guess the color sequence", justify="center", wraplength=310)
      self.message_box.grid(column=0, row=0)

   
   def game(self, color):
      if self.turn < 4:
         self.pawns[self.turn]["text"] = color.upper()
         self.pawns[self.turn]["background"] = color
         self.player_suit.append(color)
         self.turn+=1
      if self.turn == 4:
         self.toggle_color_buttons()
         color_check = self.check_colors(self.right_suit, self.player_suit)
         if color_check[0] == 4:
            self.display_result_message("Victory !")
         else :
            self.display_result_message(f"Wrong ! {color_check[0]} correctly-placed pawns and {color_check[1]} incorrectly-placed pawns !")
         
   def generate_suit(self):
      result = []
      for i in range(4):
         random_index = random.randint(0, len(self.colors) - 1)
         result.append(self.colors[random_index])
      return result
   
   def check_colors(self, maker_code, breaker_code):
      #result [n of pawns correct color & position, n of pawns right color & wrong position]
      check_result = [0, 0]
      #remaining colors without pawns at correct position for maker
      remaining_maker_pawns = []
      #remaining colors without pawns at correct position for breaker
      remaining_breaker_pawns = []
      
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
      
   def reset_selection(self):
      if len(self.pawns) != 0:
         for pawn in self.pawns:
            pawn["text"] = ""
            pawn["background"] = "white"
         self.player_suit = []
         self.turn = 0
         self.toggle_color_buttons()
      
   def display_result_message(self, new_message):
      self.message_box["text"] = new_message
      
   def toggle_color_buttons(self) :
      for button in self.colors_buttons:
         if button["state"] == NORMAL:
            button.config(state=DISABLED)
         else:
            button.config(state=NORMAL)

root = Tk()
Mastermind(root)
root.mainloop()