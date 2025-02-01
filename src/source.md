react does not render 'false' , 'null' , 'undefined' , or 'NaN' in the DOM. These values , when used in JSX , will result in nothing being displayed. 

However, '0' and empty strings ('""') are exceptions:

'0' is rendered in the DOM because it is considered a valid React Node. 
This means that if '0' is the result expression , it will appear in your UI.

empty strings ("") are also considered valid and are rendered as well . 


next chpter : import export in react js : 

1. Default Export and import 
2. Named Export and import 
3. Mixed Export and Import

