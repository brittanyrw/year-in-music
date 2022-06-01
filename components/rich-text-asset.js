import ContentfulImage from './contentful-image'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return <ContentfulImage width={200}
    height={200} src={asset.url} alt={asset.description} />
  }

  return null
}
