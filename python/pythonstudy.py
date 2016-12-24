
import os, time, re

# get the path
print(os.getcwd())

# get file metainfo
metadata = os.stat("pythonstudy.py")
print(time.localtime(metadata.st_mtime))

a_list = [x**2 for x in range(10) if x % 2==0]
print(a_list)

phonePattern = re.compile(r'^(\d{4})-(\d{8})-(\D*)')
find = phonePattern.search("0398-44556677-").groups()

print(re.sub('[ove]', 'i', "Lofe"))

print(re.sub('([^aeiou])y$', r'\1ies', 'funny'))

temp = (a, b, c) = range(3)

linecount = 0
with open("pythonstudy.py") as demofile:
	for line in demofile:
		linecount+=1

def fib(max):
    """function's docstring"""
    x, y = 0, 1
    while x < max:
      yield x
      x, y = y, x+y


# for x in fib(10):
# 	print(x, end=" ")
'''
class FibIterator():
	"""docstring for FibIterator"""
	ins_count = 0;
	def __init__(self, max):
		super(FibIterator, self).__init__()
		self.max = max

	def __iter__(self):
		self.a = 0
		self.b = 1
		return self

	def __next__(self):
		fib = self.a
		if fib > self.max:
			raise StopIteration
		self.a, self.b = self.b, self.a + self.b
		return fib

fibIter = FibIterator(10)
fibIt = FibIterator(100)
fibIt.ins_count = 3
print(fibIter.__class__.ins_count)
fibIt.__class__.ins_count = 6
print(fibIter.__class__.ins_count)
print(fibIter.ins_count)
print(fibIt.ins_count)
print(fibIt.__class__.ins_count)
'''

mystring = "How time flies!"
print(set(mystring))

gen_exp = (a for a in range(15) if a % 3 == 0)
print(tuple(gen_exp))

mylist = [12, 2, 13, 4]
print(sorted(["12", "2", "132", "4"], key=len))

print(eval('"A" + "B"')) 

mydict = {'name':'GoT', 'producer':'HBO', 'lang':'eng'}
mydict.setdefault('date',2016) # makesure that key 'date' is initialized
mydict['date'] = 2010 # we dont need to check the 'date' is in the dict now

for k,v in sorted(mydict.items()):
    print(k+' is: '+str(v))

import pprint
got = {'name':'GoT', 'producer':'HBO', 'lang':'eng'}
hoc = {'name':'House of Card', 'producer':'Netflix', 'lang':'eng'}
tvs = {}
tvs['got'] = got
tvs['hoc'] = hoc
pprint.pprint(tvs)

def double(arg):
    arg = arg * 2
    print(arg) # [1, 2, 1, 2]

def change(arg):
    arg.append('data')

val = [1,2]
double(val) 
print(val) #[1, 2]

change(val)
print(val) # [1, 2, 'data']

import sqlite3

def database_work():
    # connect to the database, if file is not exist, this will create it 
    conn = sqlite3.connect('log.db')
    # create a Cursor
    cursor = conn.cursor()
    showtables = """select name from sqlite_master where type='table' order by name"""
    cursor.execute(showtables)
    result = cursor.fetchall()
    if len(result) == 0:
         # execute a sql statement
         cursor.execute('create table log (id INTEGER PRIMARY KEY AUTOINCREMENT, request varchar(50))')
    else:
        print(result)
    # insert a data
    cursor.execute("insert into log (request) values ('christmas')")
    # close the Cursor
    cursor.close()
    # commit the transaction
    conn.commit()
    # close the connect
    conn.close()

if __name__ == '__main__':
    database_work()
