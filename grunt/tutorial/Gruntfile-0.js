// rename to Gruntfile.js to run

module.exports = function(grunt) {

  grunt.registerTask('speak', function() {
    console.log("I'm speaking");
  });
  grunt.registerTask('yell', function() {
    console.log("I'm YELLING!");
  });
  grunt.registerTask('both', ['speak', 'yell']);

  grunt.registerTask('default', 'speak'); // runs on command $ grunt
  
};
