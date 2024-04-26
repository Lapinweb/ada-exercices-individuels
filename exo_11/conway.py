from itertools import groupby

def parse_string(string):
   char_group_list = groupby(string)
   smaller_string_list = []
   
   for ele, group in char_group_list:
      smaller_string_list.append("".join(group))
   
   string_separated_by_spaces = " ".join(smaller_string_list)
   return string_separated_by_spaces
   
def describe_string(string):
   smaller_strings_list = parse_string(string).split(" ")
   description = ""
   for small_string in smaller_strings_list:
      description += f"{len(small_string)}{small_string[0]}"
   return description

def suite_conway(char, n):
   first_char = char
   if len(char) > 1:
      first_char = char[0]
   description_list = [first_char]
   
   for i in range(1, n):
      preceding_description = description_list[i - 1]
      description_list.append(describe_string(preceding_description))
   return description_list
   
print(suite_conway("1", 8))