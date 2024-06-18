import json, os, logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handler(event, context):

    logger.info(f'Event: {event}')

    response = {
        'statusCode': 200,
        'body': json.dumps(f'Healthy from {os.environ["ENV"]}!')
    }

    return response