require 'active_support/core_ext/string'

desc "Begin a new post in _posts"
task :post, :filename do |t, args|
  args.with_defaults(:filename => 'new-post')
  file_name = args.filename.gsub(/[ _]/, '-')
  open("_posts/#{Time.now.strftime('%Y-%m-%d')}-#{file_name}.md", 'w') do |post|
    post.puts "---"
    post.puts "title: \"#{args.filename.gsub(/[-_]/, ' ').titlecase}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %T %Z')}"
    post.puts "---"
  end
end

desc "Start a new draft in _drafts"
task :draft, :filename do |t, args|
  args.with_defaults(:filename => 'new-post')
  file_name = args.filename.gsub(/[ _]/, '-')
  open("_drafts/#{file_name}.md", 'w') do |post|
    post.puts "---"
    post.puts "title: #{args.filename}"
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %T %Z')}"
    post.puts "---"
  end
end

desc "Start a new project in _projects"
task :project, :filename do |t, args|
  args.with_defaults(:filename => 'new-project')
  file_name = args.filename.gsub(/[ _]/, '-')
  open("_projects/#{Time.now.strftime('%Y-%m-%d')}-#{file_name}.md", 'w') do |post|
    post.puts "---"
    post.puts "title: #{args.filename}"
    post.puts "subtitle: TODO"
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %T %Z')}"
    post.puts "description: TODO"
    post.puts "featured_image: ''"
    post.puts "accent_color: '#4C60E6'"
    post.puts "gallery_images: "
    post.puts "---"
  end
end
