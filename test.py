def make_change(amount):

    denominations = [500, 100, 25, 10, 5, 1]

    

    coin_count = 0

    

    for coin in denominations:

        coin_count += amount // coin
        print(coin_count)

        amount %= coin
        print(amount)

        

    return coin_count

print(make_change(468))
