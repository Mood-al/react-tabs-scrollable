// based on https://github.com/mui/material-ui/blob/17d4b9e037c90903e7d57fce36db4e58e2ee7494/packages/mui-utils/src/ownerDocument.ts#L4

export default function ownerDocument(node: Node | null | undefined): Document {
  return (node && node.ownerDocument) || document;
}
