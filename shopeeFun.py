import json

import requests

unFollowUrl = "https://shopee.com.my/buyer/unfollow/shop/171924425/"
followUrl = "https://shopee.com.my/buyer/follow/shop/171924425/"

body = {"csrfmiddlewaretoken": "i4ULMeO0EHtAc1NlvDj2i5uIcXYDsXEt"}
headers = {'content-type': "application/json"}

response = requests.post(unFollowUrl, data=json.dumps(body), headers=headers)
# 也可以直接将data字段换成json字段，2.4.3版本之后支持
# response  = requests.post(url, json = body, headers = headers)

# 返回信息
print(response.text)
# 返回响应头
print(response.status_code)