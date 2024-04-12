from tkinter import *
from tkinter import ttk


class Mastermind:
   def __init__(self, root) :
      root.title("Mastermind")
      
      style = ttk.Style(root)
      
      self.turn = 0
      self.colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple", "pink"]
      self.pawns = []
      
      content = ttk.Frame(root, padding="10")
      content.grid(column=0, row=0)
      
      colors_frame = ttk.LabelFrame(content, text="Choose a color", padding="10")
      colors_frame.grid(column=0, row=0)
      
      column_number = 0
      row_number = 0
      for color in self.colors:
         style.configure("Color_%s.TButton" %color, foreground=color)
         color_button = ttk.Button(colors_frame, text=color.upper(), width=10, padding="5", style="Color_%s.TButton" %color,
         command=lambda selected_color = color: self.add_pawn(selected_color))
         color_button.grid(column=column_number,row=row_number)
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
      
      pawns_frame = ttk.LabelFrame(content, text="Selection", padding="20")
      pawns_frame.grid(column=0, row=(row_number+1), sticky=(W,E))
      for index in range(4):
         pawn_text = index + 1
         pawn = ttk.Label(pawns_frame, text=pawn_text,anchor="center", width=10, padding="5", borderwidth=2, relief="ridge", style="Pawn_%s.TLabel" %index, background="white")
         self.pawns.append(pawn)
         self.pawns[index].grid(column=index,row=3)
         
      print(self.pawns)
      
      """ pawn labels
      pawn1 = ttk.Label(pawns_frame, text=1,anchor="center", width=10, padding="5").grid(column=0,row=3)
      pawn2 = ttk.Label(pawns_frame, text=2,anchor="center", width=10, padding="5").grid(column=1,row=3)
      pawn3 = ttk.Label(pawns_frame, text=3,anchor="center", width=10, padding="5").grid(column=2,row=3)
      pawn4 = ttk.Label(pawns_frame, text=4,anchor="center", width=10, padding="5").grid(column=3,row=3) """
   
   def add_pawn(self, color):
      if self.turn < 4:
         self.pawns[self.turn]["text"] = color.upper()
         self.pawns[self.turn]["background"] = color
         self.turn+=1
   
      
root = Tk()
Mastermind(root)
root.mainloop()