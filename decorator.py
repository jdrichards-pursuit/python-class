# PYTHON DECORATOR CODE - first written second with decorator
#All decorators are higher-order functions because they either take a function or return a function.
# Not all higher-order functions are decorators because not all of them are used to wrap and modify the behavior of functions.


# python higher order functions
def shout(func):
    def wrapper(text):
        return func(text).upper()
    return wrapper

def whisper(func):
    def wrapper(text):
        return func(text).lower()
    return wrapper

# python decorators
@shout
def greet(name):
    return f"Hello, {name}!"

@whisper
def say_goodbye(name):
    return f"Goodbye, {name}."

print(greet("Alice"))        # Output: "HELLO, ALICE!"
print(say_goodbye("Bob"))    # Output: "goodbye, bob."