from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///content.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'

db = SQLAlchemy(app)

class ContentSection(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    page_name = db.Column(db.String(80), nullable=False)
    section_name = db.Column(db.String(80), nullable=False)
    content = db.Column(db.Text, nullable=True) # Allow empty content

    def __repr__(self):
        return f'<ContentSection {self.page_name}.{self.section_name}>'

admin = Admin(app, name='Admin Panel', template_mode='bootstrap3')

class ContentSectionAdminView(ModelView):
    # You can customize the view here if needed, for example:
    column_list = ('page_name', 'section_name', 'content') # Columns to display in the list view
    form_columns = ('page_name', 'section_name', 'content') # Fields to display in the edit/create form
    # Allow inline editing for 'content' for easier changes
    column_editable_list = ['content']
    # Use a TextArea for the content field for better multiline editing
    form_overrides = {
        'content': {'form_field_type': 'TextAreaField'}
    }
    # Optional: Add search functionality
    column_searchable_list = ['page_name', 'section_name', 'content']
    # Optional: Add filters
    column_filters = ['page_name', 'section_name']

admin.add_view(ContentSectionAdminView(ContentSection, db.session))

@app.context_processor
def inject_content_retriever():
    def get_content(page_name, section_name, default=''):
        # Query the database for the content
        section = ContentSection.query.filter_by(page_name=page_name, section_name=section_name).first()
        if section and section.content:
            return section.content
        return default # Return default content if not found or empty
    return dict(get_content=get_content)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/commitment')
def commitment():
    return render_template('commitment.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/cookie')
def cookie():
    return render_template('cookie.html')

@app.route('/footer')
def footer():
    return render_template('footer.html')

@app.route('/legal')
def legal():
    return render_template('legal.html')

@app.route('/navbar')
def navbar():
    return render_template('navbar.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/solutions')
def solutions():
    return render_template('solutions.html')

@app.route('/suppliers')
def suppliers():
    return render_template('suppliers.html')

def init_db():
    with app.app_context(): # Ensure we are within application context
        db.create_all() # Create tables

        # Check if data already exists to avoid duplicates if run multiple times
        if ContentSection.query.first() is None:
            print("Populating database with initial content...")

            # Content for blog.html (based on common blog structures)
            initial_content = [
                # --- blog.html ---
                {'page_name': 'blog', 'section_name': 'title', 'content': 'Our Blog'},
                {'page_name': 'blog', 'section_name': 'post1_title', 'content': 'Understanding Sustainable Building Materials'},
                {'page_name': 'blog', 'section_name': 'post1_excerpt', 'content': 'An in-depth look at materials that benefit the environment...'},
                {'page_name': 'blog', 'section_name': 'post1_date', 'content': 'October 26, 2023'},
                {'page_name': 'blog', 'section_name': 'post2_title', 'content': 'The Future of Urban Drainage Solutions'},
                {'page_name': 'blog', 'section_name': 'post2_excerpt', 'content': 'Exploring innovative approaches to managing water in cities...'},
                {'page_name': 'blog', 'section_name': 'post2_date', 'content': 'November 10, 2023'},

                # --- commitment.html ---
                {'page_name': 'commitment', 'section_name': 'title', 'content': 'Our Commitment'},
                {'page_name': 'commitment', 'section_name': 'heading1', 'content': 'Commitment to Sustainability'},
                {'page_name': 'commitment', 'section_name': 'paragraph1', 'content': 'We are dedicated to providing solutions that are environmentally responsible...'},
                {'page_name': 'commitment', 'section_name': 'heading2', 'content': 'Commitment to Quality'},
                {'page_name': 'commitment', 'section_name': 'paragraph2', 'content': 'Our products and services meet the highest standards of quality and durability...'},

                # --- cookie.html ---
                {'page_name': 'cookie', 'section_name': 'title', 'content': 'Cookie Policy'},
                {'page_name': 'cookie', 'section_name': 'heading1', 'content': 'How We Use Cookies'},
                {'page_name': 'cookie', 'section_name': 'paragraph1', 'content': 'This site uses cookies to enhance user experience...'},
                {'page_name': 'cookie', 'section_name': 'list_item1', 'content': 'Essential site functions.'},
                {'page_name': 'cookie', 'section_name': 'list_item2', 'content': 'Performance analytics.'},

                # --- Placeholder for index.html ---
                {'page_name': 'index', 'section_name': 'hero_title', 'content': 'Welcome to Homna'},
                {'page_name': 'index', 'section_name': 'hero_subtitle', 'content': 'Innovative Solutions for a Sustainable Future'},
                {'page_name': 'index', 'section_name': 'section1_title', 'content': 'Our Services'},
                {'page_name': 'index', 'section_name': 'section1_body', 'content': 'Detailed description of services offered...'},

                # --- Placeholder for about.html ---
                {'page_name': 'about', 'section_name': 'title', 'content': 'About Us'},
                {'page_name': 'about', 'section_name': 'mission_statement', 'content': 'Our mission is to lead the industry...'},
                {'page_name': 'about', 'section_name': 'team_intro', 'content': 'Meet our dedicated team of professionals...'},
            ]

            for item in initial_content:
                section = ContentSection(page_name=item['page_name'], section_name=item['section_name'], content=item['content'])
                db.session.add(section)

            db.session.commit()
            print("Database populated.")
        else:
            print("Database already contains data. Skipping population.")

if __name__ == '__main__':
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == 'initdb':
        init_db()
    else:
        app.run(debug=True)
