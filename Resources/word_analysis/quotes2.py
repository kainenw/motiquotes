import urllib.request as ul
from bs4 import BeautifulSoup as soup

files = {'f': ('quoties.txt', open('quoties.txt', 'rb'))}

file = open("quoties.txt", "w", encoding="utf-8")

# file.write('words = " ')

url = 'https://www.reddit.com/r/Motivational_Quotes/'
req = ul.Request(url)
client = ul.urlopen(req)
htmldata = client.read()
client.close()
pagesoup = soup(htmldata, "html.parser")
itemLocator = pagesoup.findAll('h3', {"class":"_eYtD2XCVieq6emjKBH3m"})
print(itemLocator)
for item in itemLocator:   
    itemText = item.text
    # str_list1 = itemText.split('―')
    # str_list2 = str_list1[0].split('“',1)
    # str_list3 = str_list2[1].split('”',1)
    # str_list4 = str_list3[0].replace('.', '  ')
    # result1 = re.sub('[\W_]+', " ", str_list4.lower())
    # result2 = result1.replace(" t ", "'t ")
    # result3 = result2.replace(" s ","'s ")
    file.write(itemText)

# file.write('"')

file.close()