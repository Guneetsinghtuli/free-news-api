const news = {
    india:[
        {
            url: "https://www.news18.com/politics/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        },
        {
            url:"https://indianexpress.com/section/india/",
            selector:'.articles',
            context: '.nation',
            image:'data-lazy-src',
            heading:'h2'
        }
       
    ],
    entertainment:[
        {
            url: "https://www.news18.com/entertainment/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        },
        {
            url:"https://indianexpress.com/section/entertainment/",
            selector:'.articles',
            context: '.nation',
            image:'data-lazy-src',
            heading:'.title'
        }

    ],
    business:[
        {
            url:  "https://www.news18.com/business/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
       ,
    ],
    tech:[
        {
            url:  "https://www.news18.com/tech/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
        
    ],
    auto:[
        {
            url:  "https://www.news18.com/auto/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
        
    ],
    sports:[
        {
            url:  "https://www.news18.com/sports/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        },
        {
            url:"https://indianexpress.com/section/sports/",
            selector:'.articles',
            context: '.nation',
            image:'data-lazy-src',
            heading:'h2'
        }
        
    ],
    world:[
        {
            url:  "https://www.news18.com/world/",
            selector:'.blog_list_row',
            context:'.blog_list',
            image:'data-src',
            heading:'h4'
        }
        
    ]
}

module.exports = news