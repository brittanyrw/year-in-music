import AlbumCard from './album-card'

export default function albums({ posts }) {
  return (
      <section className="album-container container">
        {posts.map((post) => (
          <AlbumCard
            key={post.slug}
            title={post.name}
            coverImage={post.albumCover.url}
            releaseYear={post.releaseYear}
            artistName={post.artistName}
            date={post.favoriteMonth}
            mood={post.mood}
            type={post.type}
            language={post.language}
            slug={post.slug}
          />
        ))}
      </section>
  )
}
