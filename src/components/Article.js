import React from 'react';
import Card from 'react-bootstrap/Card';
import ContentLoader from 'react-content-loader';
import '../styles/jokeSetup.css';





const Article = props => (
  <Card className='px-4 mb-4'>
    <ContentLoader className="custom-content-loader" viewBox="0 0 800 60" height={100} width={1000} backgroundColor="#f2d386" {...props}>
      <rect x="0" y="13" rx="4" ry="4" width="50%" height="9" />
      <rect x="0" y="29" rx="4" ry="4" width="30%" height="8" />
    </ContentLoader>
  </Card>
)

Article.metadata = {
  name: 'RoyalBhati',
  github: 'royalbhati',
  description: 'Simple Article',
  filename: 'Article',
}

export default Article;