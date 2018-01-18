(function(angular) {
    
    'use strict';

    angular.module('app')
        .component('helloWorld', {
            templateUrl: 'app/views/testView.html',
            controller: FlickrController
        }
    );

    function FlickrController () {
        var $ctrl = this;

        $ctrl.test = {
            title: 'Billy Kidd 8187',
            author: 'ebs238',
            published: '2018-01-16'
        //     <entry>
        //     <title>Billy Kidd 8187</title>
        //     <link rel="alternate" type="text/html" href="https://www.flickr.com/photos/ebs238/24858067617/"/>
        //     <id>tag:flickr.com,2005:/photo/24858067617</id>
        //     <published>2018-01-16T17:08:41Z</published>
        //     <updated>2018-01-16T17:08:41Z</updated>
        //     <flickr:date_taken>2018-01-15T01:09:56-08:00</flickr:date_taken>
        //     <dc:date.Taken>2018-01-15T01:09:56-08:00</dc:date.Taken>
        //     <content type="html">			&lt;p&gt;&lt;a href=&quot;https://www.flickr.com/people/ebs238/&quot;&gt;ebs238&lt;/a&gt; posted a photo:&lt;/p&gt;
            
        // &lt;p&gt;&lt;a href=&quot;https://www.flickr.com/photos/ebs238/24858067617/&quot; title=&quot;Billy Kidd 8187&quot;&gt;&lt;img src=&quot;https://farm5.staticflickr.com/4748/24858067617_721fab93c4_m.jpg&quot; width=&quot;240&quot; height=&quot;160&quot; alt=&quot;Billy Kidd 8187&quot; /&gt;&lt;/a&gt;&lt;/p&gt;
        
        // </content>
        //     <author>
        //       <name>ebs238</name>
        //       <uri>https://www.flickr.com/people/ebs238/</uri>
        //       <flickr:nsid>77522329@N08</flickr:nsid>
        //       <flickr:buddyicon>https://farm3.staticflickr.com/2862/buddyicons/77522329@N08.jpg?1391306489#77522329@N08</flickr:buddyicon>
        //     </author>
        //     <link rel="enclosure" type="image/jpeg" href="https://farm5.staticflickr.com/4748/24858067617_721fab93c4_b.jpg" />
        //     <category term="" scheme="https://www.flickr.com/photos/tags/" />
        //     <displaycategories>
        //             </displaycategories>
        //     </entry>
        };

        $ctrl.$onInit = function() {
        };
    }
}(angular));
    
// IIFE
