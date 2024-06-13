dictionnary = {
    'texte': '1',
    'lorem': '2',
    'qui': '3',
    'donc': '4',
    'est': '5',
    'que': '6',
    'pour': '7',
    'ceci': '8',
    'faux-texte': '9',
    'dans': '10',
    'plus': '11',
    'avec': '12'
}

list_test = ['mais', 'ceci', 'est', 'un', 'long', 'faux-texte']

def divide_string(text):
    return text.split(" ")

def join_string_list(string_list):
    return " ".join(string_list)

def replace_refs(dict, string_list):
    new_list = string_list.copy()
    for index, el in enumerate(new_list):
        if (dict.get(el) != None):
            new_list[index] = dict.get(el)
    return new_list

def revert_refs(dictionnary, string_list):
    new_list = string_list.copy()
    inverted_dict = dict(map(reversed, dictionnary.items()))
    for index, el in enumerate(new_list):
        if (inverted_dict.get(el)):
            new_list[index] = inverted_dict.get(el)
    return new_list
       
def create_word_rate_dict(string_list):
    new_dict = {}
    for string in string_list:
        if new_dict.get(string) == None:
            new_dict[string] = 1
        else:
            new_dict[string] += 1
    return new_dict

def create_refs_dict(string_list):
    new_dict = {}
    id = 0
    for string, string_nb in string_list.items():
        if len(string) > 2 and string_nb > 1:
            new_dict[string] = f"{id}"
            id += 1
    return new_dict

def compress(text):
    divided_text_list = divide_string(text)
    rate_dict = create_word_rate_dict(divided_text_list)
    refs_dict = create_refs_dict(rate_dict)
    substituted_refs_text_list = replace_refs(refs_dict, divided_text_list)
    compressed_text = join_string_list(substituted_refs_text_list)
    
    return {"compressed_text": compressed_text, "refs_dictionnary": refs_dict}


list_hello = ["hello", "world", "hello", "les", "Emmas", "world", "world", "les"]

string_test = "Hello World ! Hello les Emmas ! Bonjour les Emmas ! Bonjour le monde et la promo et la vie !"
compressed_text, refs_dict = compress(string_test).values()
print(compressed_text)
print(refs_dict)