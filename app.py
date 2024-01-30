from flask import Flask, request, Response

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download():
    text = request.form.get('text')

    # Generate HTML file
    if request.form.get('format') == 'html':
        html_content = f'<html><body><h1>{text}</h1></body></html>'
        return Response(html_content, mimetype='text/html')

    # Generate CSV file
    elif request.form.get('format') == 'csv':
        csv_content = f'text\n{text}'
        return Response(csv_content, mimetype='text/csv')

    # Invalid format
    else:
        return 'Invalid format specified', 400

if __name__ == '__main__':
    try:
        app.run()
    except Exception as e:
        print(f"An error occurred: {e}")
