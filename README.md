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