import { Slug } from './slug';

test('should format text to type word-word', () => { 
    const slug = Slug.createFromText('My First Slug--');

    expect(slug.value).toEqual('my-first-slug');
 })