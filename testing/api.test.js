const { returnURL, newsObject } = require("../Controller/news");
jest.setTimeout(8000)

beforeAll(()=>{
    console.log("Running Test")
})

test('Return the Requested news Object', () => {
    let obj = returnURL("business")
    let result = [
        {
            source:"news18",
            url:  "https://www.news18.com/business/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
       ,
       {
           source: "TechCrunch",
           url: "https://techcrunch.com/startups/",
           selector: '.post-block',
           context: '.content',
           image: 'src',
           heading:'.post-block__title'
       }
    ]
    expect(obj).toStrictEqual(result)
});

test('Return News',async ()=>{
    
    let heading= [
        {
            source:"news18",
            url:  "https://www.news18.com/business/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
       ,
       {
           source: "TechCrunch",
           url: "https://techcrunch.com/startups/",
           selector: '.post-block',
           context: '.content',
           image: 'src',
           heading:'.post-block__title'
       }
    ]
    let news = await newsObject(heading)
    expect(news).toBeDefined();
    expect(news).not.toHaveLength(0);
})
