







@app.route('/groups_and_friends')
@jwt_required()
def groups_and_friends():
    current_user = get_jwt_identity()
    dynamodb = boto3.client("dynamodb")
    response = dynamodb.get_item(TableName='User_information', Key={'phone':{'N':current_user}})
    # print(response)

    groups = []
    for i in response['Item']['Groups']['L']:
        groups.append(i['N'])
    friends = []
    for i in response['Item']['Friends']['L']:
        friends.append(i['N'])
    response['groups'] = groups
    response['friends'] = friends

    get_names = dynamodb.batch_get_item(
        RequestItems={
            'User_information': {
                'Keys': [{'phone': {'N': friend}} for friend in friends],
                'ProjectionExpression': 'phone, #n',
            'ExpressionAttributeNames': {
                '#n': 'Name'
            }
            }
        }
    )
    items = get_names['Responses']['User_information']
    names = [item['Name']['S'] for item in items]
    response['names'] = names
    phones_with_names = {}
    for i in range(len(names)):
        phones_with_names[friends[i]] = names[i]
    response['phones_with_names'] = phones_with_names
    return response