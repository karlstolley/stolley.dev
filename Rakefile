require 'date'

# def optional_text(condition,truthy,falsey)
#   (condition ? truthy : falsey).strip
# end

namespace :new do
  desc "Interactively create a new post"
  task :post do
    print "Post title: "
    title = STDIN.gets.chomp
    print "Post category (default: posted): "
    category = STDIN.gets.chomp
    category = category.empty? ? "posted" : category
    puts "Title is '#{title}' and category is '#{category}'"
    slug = title.downcase.gsub(/\s/,'-').gsub(/[^\w-]/,'').gsub(/[-]{2,}/,'-')
    file_name = "#{Date.today.strftime("%F")}-#{slug}.md"
    puts "File name: #{file_name}"
    File.open("_posts/#{file_name}","w") do |f|
      f.write <<~YML.chomp
        ---
        title: #{title}
        description: >
          DESCRIPTIVELY DESCRIBE THIS POST
        date: #{Time.now.strftime("%F %T %z")}
        category: #{category}
        ---

      YML
    end
  end

  desc "Interactively create a new link"
  task :link do
    print "Link title: "
    title = STDIN.gets.chomp
    slug = title.downcase.gsub(/\s/,'-').gsub(/[^\w-]/,'').gsub(/[-]{2,}/,'-')
    print "Link URL: "
    link = STDIN.gets.chomp
    file_name = "#{Date.today.strftime("%F")}-#{slug}.md"
    puts "File name: #{file_name}"
    File.open("_posts/#{file_name}","w") do |f|
      f.write <<~YML.chomp
        ---
        title: #{title}
        description: >
          DESCRIPTIVELY DESCRIBE THIS LINK
        link: #{link}
        date: #{Time.now.strftime("%F %T %z")}
        category: linked
        ---

        > Quoted material...

      YML
    end
  end

end
