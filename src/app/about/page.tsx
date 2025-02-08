import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-4'>About Our Markdown Blog</h1>
      <p className='mb-4'>
        Welcome to our Markdown Blog! This is a platform where you can read and
        write blog posts using Markdown. Markdown is a lightweight markup
        language with plain text formatting syntax. Its design allows it to be
        converted to many output formats, but the original tool by the same name
        only supports HTML.
      </p>
      <p className='mb-4'>
        Our goal is to provide a simple and efficient way for writers to create
        content without worrying about complex formatting. Whether you are a
        seasoned writer or just starting out, our platform is designed to make
        your writing experience enjoyable and productive.
      </p>
      <p>
        Thank you for visiting our blog. We hope you enjoy reading and writing
        with us!
      </p>
    </div>
  );
};

export default AboutPage;
