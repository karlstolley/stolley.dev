require 'date'

def optional_text(condition,truthy,falsey)
  (condition ? truthy : falsey).strip
end

namespace :new do
  desc "Interactively create a new post"
  task :post do
    print "Post title: "
    title = STDIN.gets.chomp
    print "Post category (default: post): "
    category = STDIN.gets.chomp
    category = category.empty? ? "post" : category
    puts "Title is '#{title}' and category is '#{category}'"
    slug = title.downcase.gsub(/\s/,'-').gsub(/[^\w-]/,'').gsub(/[-]{2,}/,'-')
    file_name = "#{Date.today.strftime("%F")}-#{slug}.md"
    puts "File name: #{file_name}"
    File.open("_posts/#{file_name}","w") do |f|
      f.write <<~YML.chomp
        ---
        title: #{title}
        category: #{category}
        #{optional_text(category == 'post', "permalink: /#{slug}/\n---", '---')}

      YML
    end
  end

  desc "Interactively create a new link"
  task :link do
    print "Link title: "
    title = STDIN.gets.chomp
    print "URL: "
    url = STDIN.gets.chomp
    file_name = "#{Date.today.strftime("%F")}-#{title.downcase.gsub(/\s/,'-').gsub(/[^\w-]/,'').gsub(/[-]{2,}/,'-')}.md"
    puts "File name: #{file_name}"
    File.open("_posts/#{file_name}","w") do |f|
      f.write <<~YML.chomp
        ---
        title: #{title}
        url: #{url}
        category: linked
        layout: linked
        ---

        > Quoted material...

      YML
    end
  end

end
