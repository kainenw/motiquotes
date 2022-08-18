
allResponses = []


files = {'f': ('words.js', open('words.js', 'rb'))}
file = open("words.js", "w")

file.write("// current word list \n let words = " + str(allWords) + " \n \n /* number of results \n")


for word in allWords:
    baseURL = "http://api.datamuse.com/words?rel_syn="
    pos = "&md=p";
    response = requests.get(baseURL + word + pos)
    ready = json.loads(response.content.decode('utf-8'))
    file.write( word + ": ")
    c = 0
    for r in ready:
        allResponses.append(r["word"])
        c = c + 1
    file.write(str(c) + "\n")
    response.raise_for_status() # ensure we notice bad responses
    
file.write("*/\n\n/* words which were also returned as responses \n")

for word in allWords:
    c = 0
    for response in allResponses:
        if word == response:
            c = c + 1
    if c > 0:
        file.write(word +  ": " + str(c) + "\n")
            
file.write("*/\nexport { words }")
file.close()






print('DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!DONE!')