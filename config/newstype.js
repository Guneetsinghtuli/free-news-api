const news = {
    india:[
        {
            source:"news18",
            url: "https://www.news18.com/politics/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        },
        {
            source:"indianexpress",
            url:"https://indianexpress.com/section/india/",
            selector:'.articles',
            context: '.nation',
            image:'data-lazy-src',
            heading:'h2'
        }
       
    ],
    entertainment:[
        {
            source:"news18",
            url: "https://www.news18.com/entertainment/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        },
        {
            source:"indianexpress",
            url:"https://indianexpress.com/section/entertainment/",
            selector:'.articles',
            context: '.nation',
            image:'data-lazy-src',
            heading:'.title'
        }

    ],
    business:[
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
    ],
    tech:[
        {
            source:"news18",
            url:  "https://www.news18.com/tech/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
        
    ],
    auto:[
        {
            source:"news18",
            url:  "https://www.news18.com/auto/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
        
    ],
    sports:[
        {
            source:"news18",
            url:  "https://www.news18.com/sports/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        },
        {
            source:"indianexpress",
            url:"https://indianexpress.com/section/sports/",
            selector:'.articles',
            context: '.nation',
            image:'data-lazy-src',
            heading:'h2'
        }
        
    ],
    world:[
        {
            source:"news18",
            url:  "https://www.news18.com/world/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
        
    ]
}

module.exports = news