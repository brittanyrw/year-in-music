import ContentfulImage from './contentful-image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }) {
  const image = (
    <ContentfulImage
      width={400}
      height={400}
      alt={`Cover Image for ${title}`}
      className="album-cover"
      src={url}
    />
  )

  return (
    <div className="album-cover-wrapper">
      {slug ? (
        <Link href={`/albums/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
