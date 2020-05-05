from pynput.keyboard import Controller,Key
import time
keyboard=Controller()
stroke={"Java":{"0":"void setup()\n{\n\n}\nvoid draw()\n{\n\n}"}}



def openProcessing():
    openCmd()
    keyboard.type("processing.exe")
    keyboard.press(Key.enter)
    keyboard.release(Key.enter)
    keyboard.type("exit")
    keyboard.press(Key.enter)
   

def openVScode():
    openCmd()
    keyboard.type('code')
    keyboard.press(Key.enter)
    keyboard.release(Key.enter)





def openCmd():
    keyboard.press(Key.cmd)
    keyboard.press('r')
    keyboard.release(Key.cmd)
    keyboard.release('r')
    time.sleep(0.2)

    keyboard.type('cmd')
    keyboard.press(Key.enter)
    keyboard.release(Key.enter)
    time.sleep(0.4)

def openPowershell():
    keyboard.press(Key.alt)
    keyboard.press('f')
    keyboard.release(Key.alt)
    keyboard.release('f')
    keyboard.type('r')


def handeller(str):
    keyboard.type(str)

def openChrome():
    keyboard.press(Key.cmd)
    keyboard.press('r')
    keyboard.release(Key.cmd)
    keyboard.release('r')
    time.sleep(0.2)
    keyboard.type('chrome')
    keyboard.press(Key.enter)
    keyboard.release(Key.enter)


def openNotepad():
    keyboard.press(Key.cmd)
    keyboard.press('r')
    keyboard.release(Key.cmd)
    keyboard.release('r')
    time.sleep(0.2)
    keyboard.type('notepad')
    keyboard.press(Key.enter)
    keyboard.release(Key.enter)















