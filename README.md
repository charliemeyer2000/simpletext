# SimpleText

Main repo for simpletext

## DB Schema



## API within nextjs (`/api`)


## External API (`api.simpletext.dev`)

- `/send_message` - sends message with params:
    - `message`: the message, str _required_
    -  `number`: phone number of the format +(countrycode)(number), ex: +13472764531, str _required_
    - `offset`: how many seconds to wait to send the message (int) _optional_
- `/send_batch_message` - sends same message to numbers
    - `message`: the message, str _required_
    - `numbers`: list of numbers in the correct str format, List[str] _required_
    - `offset`: how many seconds to wait to send the message (int) _optional_

