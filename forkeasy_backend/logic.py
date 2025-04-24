

# expense = { 0:[0,50,50,50], 1:[50,0,50,0], 2:[0,0,0,50], 3:[0,100,100,0] }
# output = { 0:[0,0,50,50],1:[0,0,50,0],2:[0,0,0,0],3:[0,100,50,0] }
#expense = { 0:[0,100,100,100,0,0,0], 1:[100,0,0,0,100,100,100], 2:[100,100,0,100,100,100,100], 3:[100,0,100,0,100,100,0],4:[0,0,0,0,0,100,0],5:[0,100,0,0,0,0,100],6:[100,0,0,0,100,100,0] }
#expense = {0:[0,100,300,600],1:[0,0,200,0],2:[0,0,0,300],3:[0,0,0,0]}
expense = {0:[0,10,0],1:[1,0,5],2:[5,0,0]}
update = {}

for key,value in expense.items():
    for i in range(key,len(value)):
        if i!= key and value[i] > 0:
            if value [i] > expense[i][key] :
                expense[key][i] = value[i] - expense[i][key]
                expense[i][key] = 0
            elif value [i] < expense[i][key]:
                expense[i][key] = expense[i][key] - value[i]
                expense[key][i] = 0
            else:
                expense[i][key] = 0
                expense[key][i] = 0

print(expense)
debt = {}

for key, value in expense.items():
    total_debt = 0
    for i in range(0,len(expense)):
        total_debt = total_debt + expense[i][key]
    debt[key] = -(sum(expense[key]) - total_debt)


take = {}
give = {}
for key, value in debt.items():
    if value<0:
        take[key] = value
    else:
        give[key] = value

trans = []
give = dict(sorted(give.items(), key=lambda item: item[1], reverse = True))
take = dict(sorted(take.items(),key=lambda item: item[1]))

for key, value in give.items():
    for key1, value1 in take.items():
        cost = value+value1
      
        if value1!=0 and value!=0:
            if cost < 0 : 
               
                take[key1] = cost
                give[key] = 0
               
                trans.append([key,key1,value])
                break
            else:
                take[key1] = 0
                value = cost
             
                trans.append([key,key1,-value1])

print("trans",trans)          

# for key,value in debt.items():
 
#     if value < 0:
  
#         if value not in take:
#             take[value] = [key]
#         else:
#             take[value].append(key)
#     else:
     
#         if value not in give:
#             give[value] = [key]
#         else:
#             give[value].append(key)
# print("hereeeee")
# print("here",take)
# print(give)
# give = dict(sorted(give.items(), key=lambda item: item[1], reverse = True))

# take = dict(sorted(take.items(),key=lambda item: item[1]))





# # debt = dict(sorted(debt.items(), key=lambda item: item[1]))
# # owe = [ -100, -100]
# # debt = [150,50]


# # arr = [-10, -20, -30, -75, -1000, 200, 350, 450, 75, 60]

# # owe = [-1000, -75, -30, -20, -10]
# # debt = [450,350,200,75,60]



# # print(debt)





