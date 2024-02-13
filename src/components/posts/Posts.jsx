import './posts.scss';
import Post from '../post/Post';
import profile from '../../assets/images/profile.jpg'

function Posts() {

  const posts = [
    {
      id: 1,
      name: "Mammad",
      userId: 1,
      profilePic:
        profile,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Mammad2",
      userId: 2,
      profilePic:
        profile,
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return (
    <div className="posts">
      {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>
  )
}

export default Posts
