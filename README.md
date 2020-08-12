## Livelessons - Learn React for Modern Web Applications
## Author: Shaun Wassell

### Best Practices
- Using object destructuring instead of single object
> Component = ({ name, email, password }) instead of Component = (props)
- Split code into separated components instead of sub-rendering
> &lt;SmallerComponent&gt; instead of renderSmallComponent()
- Always using key prop inside a component of a loop
> {posts.map((post, idx) => (&lt;Post key={idx} /&gt;))}
- Separated useState hook for each single property instead of entire object
> const [name, setName] = useState('')
> <br /> const [email, setEmail] = useState('')
> <br /> const [password, setPassword] = useState('')
> <br /> instead of <br />
> const [user, setUser] = >useState({
    name: '',
    email: '',
    password: ''
})

## React Boilerplates for Production
### create-react-app is not suitable for production
- Next.js (Sticked with Vercel platform to build nextjs)
- Gastsby
- reactboilerplate
- Razzle

## Hosting React Applications
 - Netlify
    > npm i --save-dev netlify-cli
    > <br />npm run build
    > <br />npx netlify deploy
 - AWS S3
    ### Option 1
    - Create AWS S3 bucket (uncheck `Block all public access`)
    - Upload all assets in /build folder to S3 bucket (Choose `Grant public read access to this object(s)`)
    - `Properties` -> Enable `Static website hosting`
    ### Option 2
    - Install AWS CLI for Desktop to automate AWS S3 deploy script in `package.json`
    - > aws --version (to check AWS CLI version)
    - Go to `IAM` on AWS Console -> `Users` -> `Add User` (`Programatic Access` and `Admin` group)
    - > aws configure (provide access key and secret key)
    - > npm run deploy:s3
    - Update `Bucket Policy` on AWS S3 Console for `public access`
    <pre>{
        "Version": "2020-08-12",
        "Statement": [
            {
                "Sid": "PublicRead",
                "Effect": "Allow",
                "Principal: "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::your-bucket-name/*"
            }
        ]
    }</pre>
 - Firebase Hosting