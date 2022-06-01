import Link from 'next/link'
import CoverImage from './cover-image'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function AlbumCard({
  title,
  coverImage,
  date,
  slug,
  releaseYear,
  artistName
}) {
  return (
    <div className="album">
      <h2 className="album-month">{monthNames[new Date(date).getUTCMonth()]}</h2>
      <CoverImage title={title} url={coverImage} slug={slug} />
      <div className="album-info">
        <div className="album-details">
          <Link href={`/albums/${slug}`}>
            <h4 className="album-title">{title} ({releaseYear})</h4>
          </Link>
          <p>{artistName}</p>
        </div>
      </div>
    </div>
  )
}
